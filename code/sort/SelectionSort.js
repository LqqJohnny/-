
/**
 * [BubbleSort 选择排序]
 * @param {[int]} array [输入参数]
 */
function selectSort(array){
    var len = array.length;
    for(var i= 0;i<len-1;i++){
        var minIndex= i;
        // 找到 i 之后最小的 index
        for(var j = i+1;j<len;j++){
            if(array[minIndex]>array[j]){
                minIndex=j
            }
        }
        // 互换值
        var temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }
    return array;
}
