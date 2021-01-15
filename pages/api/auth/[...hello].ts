export default (req: { query: { name?: "World" | undefined } }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any } } }) => {
    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}!`)
}