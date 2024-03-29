//% color=#9600CD weight=0 icon="\uf1ec" block="Advanced Math"
namespace Math {
    //% block="Convert $num from base $base (2-9) to base 10"
    //% group="Converting Bases"
    //% base.min=2 base.max=9
    //% base.defl=2
    export function convert_from_base_to_base_10 (base: number, num: number) {
        temp_val = 0
        if (is_between(base, 2, 10)) {
            for (let index = 0; index <= convertToText(num).length - 1; index++) {
                temp_val += parseFloat(convertToText(num).charAt(convertToText(num).length - (index + 1))) * base ** index
            }
        }
        return temp_val
    }
    //% block="convert $bool into a number"
    //% group="converting types"
    export function convert_bool (bool: boolean) {
        if (bool) {
            return 1
        } else {
            return 0
        }
    }
    //% block="convert $num into a boolean"
    //% group="converting types"
    export function convert_to_bool (num: number) {
        if (num == 1) {
            return true
        } else {
            return false
        }
    }
    //% block="Convert $num from base $base (11-36) to base 10"
    //% group="Converting Bases"
    //% base.min=11 base.max=36
    //% base.defl=16
    export function convert_from_hex_base_10 (base: number, num: string) {
        temp_val = 0
        if (is_between(base, 11, 36)) {
           for (let index = 0; index <= num.length - 1; index++) {
                temp_val += ((a_n().indexOf(num.charAt(index))) * base ** (num.length - (index + 1)))
            } 
        }
        return temp_val
    }
    //% block="Numbers in base 36"
    //% group="Values"
    export function a_n() {
        return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    //% block="Convert $num from base 10 to base $new_base (2-9)"
    //% group="Converting Bases"
    //% new_base.min=2 new_base.max=9
    //% new_base.defl=2
    export function to_base (num: number, new_base: number) {
        temp_num = 0
        temp_num2 = 0
        if (is_between (new_base, 2, 10)) {
            while ((new_base ** temp_num) <= num) {
                temp_num++;
            }
            while (temp_num--) {
                temp_num3 = Math.idiv(num, (new_base ** temp_num))
                num = num % (new_base ** temp_num)
                temp_num2 = temp_num2*10 + temp_num3;
            }
        }
        return temp_num2
    }
    //% block="Convert $num from base 10 to base $new_base (11-36)"
    //% group="Converting Bases"
    //% new_base.min=11 new_base.max=36
    //% new_base.defl=16
    export function to__base (num: number, new_base: number) {
        temp_num = 0
        temp_num4 = ""
        if (is_between (new_base, 11, 36)) {
            while ((new_base ** temp_num) <= num) {
                temp_num++;
            }
            while (temp_num--) {
                temp_num5 = a_n().charAt(Math.idiv(num, (new_base ** temp_num)))
                num = num % (new_base ** temp_num)
                temp_num4 = "" + temp_num4 + temp_num5;
            }
        }
        return temp_num4
    }
    //% block="digit $digit of $num"
    //% group="Extracting"
    //% digit.defl=1
    //% num.defl=26
    export function digit (digit: number, num: number) {
        return parseFloat(convertToText(num).charAt(digit - 1))
    }
    //% block="first $length digits of π"
    //% group="Values"
    //% length.min=0 length.max=25
    //% length.defl=1
    export function pi (length: number) {
        return parseFloat ("3.1415926535897932384626433".substr(0, length + 2))
    }
    //% block="Convert $top over $below into a decimal"
    //% group="Fraction Converting"
    export function convert_from_fraction (below: number, top: number) {
        return top / below
    }
    //% block="convert $dec into a fraction (warning: not simplified)"
    //% group="Fraction Converting"
    export function convert_to_fraction (dec: number) {
        let decimal = convertToText(dec).split('.')[1]
        return decimal + '/' + (10 ** decimal.length)
    }
    //% block="$num is between $least and $max"
    //% group="Measuring"
    //% num.defl=26
    //% least.defl=2
    //% max.defl=36
    export function is_between (num: number, least: number, max: number) {
        return least <= num && num <= max
    }
    let divider = 0
    let index3 = 0
    let temp_val = 0
    let temp_val2 = 0
    let temp_num = 0
    let temp_num2 = 0
    let temp_num3 = 0
    let temp_num4 = ""
    let temp_num5 = ""
    let temp_num6 = 0
}
