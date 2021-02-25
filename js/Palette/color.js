import colorData from "./data.js";

class Palette {

    allColors = [];
    #pk = 0;

    constructor(arrColor) {
        arrColor.forEach(item => this.addColor(item));
    }

    show() {
        const style = [
            'padding: 1rem',
            'font-size: 20px',
            'text-shadow: white 1px 1px 0, white -1px -1px 0, white -1px 1px 0, white 1px -1px 0',
            'background:'
        ].join(';');

        let pattern = this.allColors.reduce((acc, item) => acc + `%c${item.id}`, '');
        let cssStyles = this.allColors.map(item => `${style} ${item.code.hex};`);

        console.log(pattern, ...cssStyles);
    }

    static createColor(color, rgb, hex, category = 'hue', type ='secondary') {

        const obj = { color, category, type, code: { rgb, hex } };

        if (Palette.validColor(obj)) return obj;

        return false;
    }

    static validColor(objColor) {
        return (
            typeof objColor.color === "string" &&
            typeof objColor.category === "string" &&
            typeof objColor.type === "string" &&
            typeof objColor?.code?.hex === "string" &&
            objColor.code?.rgb?.length === 3

        );
    }

    addColor(objColor) {
        if (!Palette.validColor(objColor)) return false;

        objColor.id = ++this.#pk;
        this.allColors.push(objColor);

        return objColor.id;
    }

    getColorById(id) {
        let index;
        const color = this.allColors.find((item, i) => {
            if (item.id === id) {
                index = i;
                return true;
            }
            return false;
        });
        return { color, index };
    }

    deleteColorById(id) {
        const { index } = this.getColorById(id);

        this.allColors.splice(index, 1);
    }

    changeColorById(id, data) {
        const {color} = this.getColorById(id);

        const fn = (data, obj) => {
            Object.entries(data).forEach(([index, item]) => {
                if (typeof obj[index] === typeof item) {
                    if (typeof item !== "object")
                        obj[index] = item;
                    else fn(item, obj[index]);
                }
            });
        }
        fn(data, color);

        return color;
    }

    mixColor(id1, id2) {
        const {color : color1} = this.getColorById(id1);
        const {color : color2} = this.getColorById(id2);
        const rgb = color1.code.rgb.map((item, index) => parseInt((item + color2.code.rgb[index]) / 2));
        const hex = rgb.reduce((acc, item) => {
            let hex = item.toString(16);
            return acc + (hex.length == 1 ? "0" + hex : hex);
        },'#');

        return {rgb, hex};
    }

}

const palette = new Palette(colorData);
 
palette.addColor( Palette.createColor('newColor1', ...Object.values(palette.mixColor(3,4))) );
palette.addColor( Palette.createColor('newColor2', ...Object.values(palette.mixColor(6,1))) );
palette.addColor( Palette.createColor('newColor3', ...Object.values(palette.mixColor(6,2))) );
palette.addColor( Palette.createColor('newColor4', ...Object.values(palette.mixColor(2,3))) );
palette.addColor( Palette.createColor('newColor5', ...Object.values(palette.mixColor(8,5))) );

palette.deleteColorById(7);
palette.changeColorById(9, {code: palette.mixColor(4,5)});

palette.show();