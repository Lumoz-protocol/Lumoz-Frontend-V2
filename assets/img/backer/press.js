  const sharp = require('sharp')

  let start = 1

  // charge()

  // function charge() {
  //   sharp('./output/'+start+'.png')
  //   // .webp({ quality: 100 })
  //   .toFile('./product/'+start+'.avif')
  //   .then(() => {
  //     if (start < 10000) {
  //       start++
  //       charge()
  //     }
  //   })
  //   .catch(err => {
  //     console.error('图片压缩或转换失败：', err)
  //   })
  // }



  // sharp('./damage-bg.png')
  //   .webp({ quality: 100 })
  //   .toFile('./damage-bg.webp')
  //   .then(() => {})
  //   .catch(err => {
  //     console.error('图片压缩或转换失败：', err)
  //   })


  // for (let i=1;i<=24;i++) {
  //   sharp(`./list1/${i}.png`)
  //   .toFile(`./list2/${i}.avif`)
  //   .then(() => {})
  //   .catch(err => {
  //     console.error('图片压缩或转换失败：', err)
  //   })
  // }


// for (let i =1;i<=14;i++) {

//   sharp(`./1/${i}.png`)
//   .toFile(`./2/${i}.avif`)
//   .then(() => {})
//   .catch(err => {
//     console.error('图片压缩或转换失败：', err)
//   })
// }


  sharp(`./16.png`)
  .toFile(`./16.avif`)
  .then(() => {})
  .catch(err => {
    console.error('图片压缩或转换失败：', err)
  })
