const fs = require ('fs');

// 读取input文件夹里的文件列表
// ['xx-xx-xx.eml', ...]
fs.readdir ('./input', function (err, files) {
  if (err) {
    throw err
  }
  for (var i = 0; i < files.length; i++){
    var k = files[i].split('-')[1];
    console.log(k);
    // files[i] 6月-分期乐-5月-人工智能.eml
    
    var src = './input/' + files[i];
    var des = './output/' + k + '/' + files[i];
    fs.copyFile(src, des, (err) => {
      if (err) throw err;
      console.log(des,'copy success');
    });
  }
});
// 按文件名规律切割并分类

// 循环遍历分类对象，并复制文件列表至目的文件夹
