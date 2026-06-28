export const authDropTables = `
DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS role_permissions;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS permissions;
DROP TABLE IF EXISTS roles;
`

export const webDropTables = `
DROP TABLE IF EXISTS contact_form;
DROP TABLE IF EXISTS contact;
DROP TABLE IF EXISTS about;
DROP TABLE IF EXISTS home;
`