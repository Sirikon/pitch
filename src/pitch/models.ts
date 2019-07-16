import { Readable } from 'stream';

export interface IProcessContext {
	absolutePath: string;
	params: any;
	data: any;
}

export interface IProcessor {
	name: string;
	outputExtension: string;
	test: (file: string) => boolean;
	process: (context: IProcessContext) => Readable;
}
