// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friends = [
  {
      "name":"Brian",
      "photo":"https://i.amz.mshcdn.com/GKS_ULnDeS0WwLpbJ8EPVnkODCk=/200x200/2016%2F09%2F16%2F32%2Fhttpsd2mhye01h4nj2n.cloudfront.netmediaZgkyMDE2LzA0.fbd93.jpg",
      "scores":[
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
          ]
      },
  {
  "name":"Chris",
  "photo":"https://upload.wikimedia.org/wikipedia/commons/0/01/Chris_Pine_2%2C_2013.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Pamela",
  "photo":"https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/09/02/09/pamelanaderson.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Seema",
  "photo":"http://www.osborneclarke.com/wp-content/uploads/2016/08/chandaria-seema.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Alen",
  "photo":"http://bmica.com/images/team/alen_bottaini_sw.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Lisa",
  "photo":"https://wallscover.com/images/lisa-1.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Natalia",
  "photo":"https://www.famousbirthdays.com/headshots/natalia-dyer-2.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Jason",
  "photo":"https://www.thefamouspeople.com/profiles/images/jason-statham-3.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Ben",
  "photo":"http://celebrityinsider.org/wp-content/uploads/2018/02/ben-affleck.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Tom",
  "photo":"http://www.telegraph.co.uk/content/dam/films/2017/05/09/TELEMMGLPICT000126997106_trans_NvBQzQNjv4BqQJoTHvv9hWAiaCwwE8274qdRjFWf6P0Is4XL-Ib-r98.jpeg?imwidth=450",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
}
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;