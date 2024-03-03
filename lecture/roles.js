let user = {
    name: 'alexandrea',
    password: 'cats',
    email: 'alparks@gmail.com',
    roles: ['programmer', 'developer'],
    contact: {
        office: 'M1234',
        telephone: '12345678910'
    }
}

user.salary = 100000
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)