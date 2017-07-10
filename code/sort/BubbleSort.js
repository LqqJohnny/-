
/**
 * [BubbleSort 冒泡排序]
 * @param {[type]} array [输入参数]
 */
function BubbleSort(array){
    var len = array.length;
    for(var i =len-1;i>0;i--){
        for(var j = i-1;j>=0;j--){
            if(array[i]<array[j]){
                // 切换位置
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
