module.exports = {
  getAll: () => ({
    users: [
      {
        id:1,
        name: 'name',
        email: "email@email.com"
      },{
        id:2,
        name: 'name',
        email: "email@email.com"
      },
      {
        id:3,
        name: 'name',
        email: "email@email.com"
      },
      {
        id:4,
        name: 'name',
        email: "email@email.com"
      }
    ]
  }),
  getOne: (id) => {
    return id.includes('undefined')  ?  'Invalid Id' :
    {
      id,
      name: 'name',
      email: "email@email.com"
    }
  }
}
