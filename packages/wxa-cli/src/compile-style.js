import path from 'path';
import {readFile, getDistPath, writeFile, amazingCache, getConfig, info, error} from './utils';
import compilerLoader from './loader';

export default class CStyle {
    constructor(src, dist, ext) {
        this.current = process.cwd();
        this.src = src;
        this.dist = dist;
        this.ext = ext;
    }

    compile(rst, opath) {
        if (typeof rst === 'string') {
            rst = [{
                type: rst,
                code: readFile(path.join(opath.dir, opath.base)) || '',
            }];
        }

        let promises = rst.map((style)=>{
            const content = style.code;

            let compiler = compilerLoader.get(style.type);

            return amazingCache({
                source: content,
                options: {configs: compiler.configs},
                transform: function(source, options) {
                    return compiler.parse(content, options.configs);
                },
            });
        });

        return Promise.all(promises).then((rets)=>{
            let allContent = rets.join('');

            let target = getDistPath(opath, 'wxss', this.src, this.dist);
            // console.log(target);
            info('write', path.relative(this.current, target));
            writeFile(target, allContent);
        }).catch((e)=>{
            error(e);
        });
    }
}

