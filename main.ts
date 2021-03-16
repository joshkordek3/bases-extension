//% color=#9600CD weight=0 icon="\uf1ec" block="Advanced Math"
namespace advanced.math {
//%block
//% group="Converting Bases"
export function convert_from_base_to_base_10 (base: number, num: number) {
    temp_val = 0
    if (is_between(base, 2, 10)) {
        for (let index = 0; index <= convertToText(num).length - 1; index++) {
            temp_val += parseFloat(convertToText(num).charAt(convertToText(num).length - (index + 1))) * base ** index
        }
    }
    return temp_val
}
let temp_val = 0
//%block
//% group="Measuring"
export function is_between (num: number, least: number, max: number) {
    return least >= num && num <= max
}
}
