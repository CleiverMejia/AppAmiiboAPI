interface Release {
    au: string,
    eu: string,
    jp: string,
    na: string
};

export default interface Amiibo {
    amiiboSeries: string,
    character: string,
    gameSeries: string,
    head: number,
    image: string,
    name: string,
    release: Release,
    tail: number,
    type: string
};