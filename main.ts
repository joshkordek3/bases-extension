//% color=#800080 weight=101 icon="\uf1ec" block="Advanced Numbers"
namespace hello {
//%block
//% group="Converting Bases"
export function convert_from_base_to_base_10 (base: number, num: number) {
    temp_val = 0
    for (let index = 0; index <= convertToText(num).length - 1; index++) {
        temp_val += parseFloat(convertToText(num).charAt(convertToText(num).length - (index + 1))) * base ** index
    }
    return temp_val
}
let temp_val = 0
}