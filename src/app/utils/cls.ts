export const clx = (input) =>
	input
		?.replace?.(/\s+/gm, ' ')
		.split(' ')
		.filter((cond) => typeof cond === 'string')
		.join(' ')
		.trim() ?? ''

export function cls(
	...args: ([input: string, enabled: boolean] | string)[]
): string {
	return args
		.reduce<string>(
			(acc, curr) =>
				typeof curr === 'string'
					? `${acc}${clx(curr)} `
					: `${acc}${curr?.[1] ? `${clx(curr?.[0])} ` : ''}`,
			''
		)
		.trim()
}