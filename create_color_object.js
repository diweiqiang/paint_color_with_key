var fs=require('fs');
var color_arr=[];
var obj={};

fs.readFile('colors1.txt',function (err,data) {
    if (err) throw err;
    var arr=data.toString().split(/\s+/);
    arr.shift();
    arr.pop();
    arr.pop();
    //console.log(arr);

    for (var i=0;i<arr.length;i=i+4)
    {
        obj={};
        obj.english=arr[i];
        obj.chinese=arr[i+1];
        obj.hex=arr[i+2];
        obj.rgb=arr[i+3];
        color_arr.push(obj);
    }
    console.log(color_arr.length);
    //console.log(color_arr);
    /*
    fs.writeFile('color_object.txt','hello di',function (err) {
        if (err) throw err;
        console.log('saved');
    });*/
    var color_arr_string=color_arr.map(function (item) {
        return JSON.stringify(item);
    }).join(',');
    fs.writeFile('color_object.json',color_arr_string,function (err) {
        if (err) throw err;
        console.log('it is saved');
    });

});


