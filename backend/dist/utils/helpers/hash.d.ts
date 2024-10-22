declare function bcryptHash({ salt, source, }: {
    salt?: string | number;
    source: string;
}): Promise<any>;
declare const _default: {
    bcryptHash: typeof bcryptHash;
};
export default _default;
