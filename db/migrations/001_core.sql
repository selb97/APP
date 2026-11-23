-- migrate:up
CREATE EXTENSION IF NOT EXISTS citext;   -- case-insensitive text (usernames, emails)
CREATE SCHEMA core;

CREATE FUNCTION core.set_updated_at() RETURNS trigger AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE core.users (
    id             bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username       citext      NOT NULL UNIQUE
                   CHECK (username ~ '^[A-Za-z0-9_.-]{3,32}$'),
    email          citext      UNIQUE,
    display_name   text        NOT NULL,
    password_hash  text        NOT NULL,
    is_admin       boolean     NOT NULL DEFAULT false,
    is_active      boolean     NOT NULL DEFAULT true,
    last_login_at  timestamptz,
    created_at     timestamptz NOT NULL DEFAULT now(),
    updated_at     timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER users_updated_at BEFORE UPDATE ON core.users
    FOR EACH ROW EXECUTE FUNCTION core.set_updated_at();

-- migrate:down
DROP SCHEMA core CASCADE;