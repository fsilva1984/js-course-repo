

// copia simples
const b1 = {
    name: "Silva",
    id: 40
}

const b2 = { ...b1 }

console.log(b2, b2);

b2.id = 88;
console.log(b2, b2);


console.log();


// copia profunda

const f1 = {
    routs: [
        { r: "Rua Major MOta" },
        { r: "Av. Candido Manso" },
        { r: "Rua Tafarel tavares" }
    ],
    obj: [
        { n: "Fogão 4 bocas" },
        { n: "Geladeira Consul" },
        { n: "Lava roupas Brastemp" }
    ]
}

const f2 = JSON.parse(JSON.stringify(f1));


f2.obj[0] = "Cama Box casal";

console.log(f2, f1);