import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ahmad af',
    email: 'Ahmad@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Salah mj',
    email: 'Salah@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
