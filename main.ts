//% color=#9600CD weight=0 icon="\uf1ec" block="Advanced Math"
namespace advanced.math {
//% block="Convert $num from base $base (2-9) to base 10"
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
//% block="Convert $num from $base (11-16) base to base 10"
//% group="Converting Bases"
export function convert_from_hex_base_10 (base: number, num: string) {
    temp_num = 0
    for (let index = 0; index <= num.length - 1; index++) {
        temp_num += ((a_n().indexOf(num.charAt(index))) * base ** (num.length - index))
    }
    return temp_num
}
//% block="Numbers in hexdecimal"
//% group="Values"
export function a_n() {
    return "0123456789ABCDEF"
}
export function convert_from_base_10_to_base (num: number, base: number) {
    temp_val2 = num
    temp_val = 0
    index3 = 0
    if (is_between(base, 2, 10)) {
        while (!(divider > num)) {
            divider = base ** index3
            index3 += 1
        }
        index3 = 0
        for (let index2 = 0; index2 <= 1e+300; index2++) {
            temp_val = parseFloat("" + convertToText(temp_val) + convertToText(Math.idiv(temp_val2, divider)))
            temp_val2 = temp_val2 % divider
            divider = divider / base
            if (num <= convert_from_base_to_base_10(base, temp_val)) {
            break;
            }
        }
    }
    return temp_val
}
//% block="$num is between $least and $max"
//% group="Measuring"
export function is_between (num: number, least: number, max: number) {
    return least <= num && num <= max
}
let divider = 0
let index3 = 0
let temp_val2 = 0
let temp_val = 0
let temp_num = 0
}
//%block
//% group="Converting Bases"


//% block="planet id from $planet"
//% planet.shadow="planet"
