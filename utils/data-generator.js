const getRandomFloat = (maxRangeNotIncluding = 100) => {
    const float = Math.random()*maxRangeNotIncluding;
    return float;
}

const getRandomInteger = (maxRangeNotIncluding = 100) => {
    const decimal = Math.random()*maxRangeNotIncluding;
    const integer = Math.floor(decimal);
    return integer;
}

const getArray = (config) => {
    const data = [];
    let generate;
    if (config.numberType === "float") {
        generate = getRandomFloat;
    } else if (config.numberType === "int") {
        generate = getRandomInteger;
    }
    for (let i = 0; i < config.length; i++) {
        data.push(generate(config.maxValue));
    }
    return data
}

const generationFloatsDemo = () => {
    let floatListV0 = Array.apply(null, {length: 1e2}).map(Function.call, getRandomFloat);
    let floatListV1 = Array.apply(null, {length: 1e2}).map(() => getRandomFloat);
    let floatListV2 = [];
    for (let i = 0; i < 1e2; i++) {
        floatListV2.push(getRandomFloat());
    }
    console.log(floatListV0);
}
const generationIntegersDemo = () => {
    let integerListV0 = Array.apply(null, {length: 1e2}).map(Function.call, getRandomInteger);
    let integerListV1 = Array.apply(null, {length: 1e2}).map(() => getRandomInteger());
    let integerListV2 = [];
    for (let i = 0; i < 1e2; i++) {
        integerListV2.push(getRandomInteger());
    }
    console.log(integerListV0);
}

const generateArrayDemo = () => {
    const integerList = getArray({numberType:  "int", length: 10, maxValue: 1000})
    const floatList = getArray({numberType:  "float", length: 5, maxValue: 1000})
    console.log(integerList);
    console.log(floatList);
}

generationFloatsDemo();
generationIntegersDemo();
generateArrayDemo();