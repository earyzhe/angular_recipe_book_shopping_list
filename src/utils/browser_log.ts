export class Print {
    
    public static info(message: any) : void {
        const color: string  = 'white'
        const backgroundColor: string = 'blue'
        const fontWeight: string = 'bold';
        const style : string = 'color: ' + color + '; background: ' + backgroundColor + ';' +  '; font-weight: ' + fontWeight + ';'
        console.log('%c ' + message , style)
    }
    
    public static warning(message: any) : void {
        const color: string  = 'black'
        const backgroundColor: string = 'yellow'
        const fontWeight: string = 'bold';
        const style : string = 'color: ' + color + '; background: ' + backgroundColor + ';' +  '; font-weight: ' + fontWeight + ';'
        console.log('%c ' +  message , style)
    }
    
    public static error(message: any) : void {
        const color: string  = 'white'
        const backgroundColor: string = 'red'
        const fontWeight: string = 'bold';
        const style : string = 'color: ' + color + '; background: ' + backgroundColor + ';' +  '; font-weight: ' + fontWeight + ';'
        console.log('%c ' +  message , style)
    }
    
    public static success(message: any) : void {
        const color: string  = 'white'
        const backgroundColor: string = 'green'
        const fontWeight: string = 'bold';
        const style : string = 'color: ' + color + '; background: ' + backgroundColor + ';' +  '; font-weight: ' + fontWeight + ';'
        console.log('%c ' +  message , style)
    }
    
    public static purple(message: any) : void {
        const color: string  = 'white'
        const backgroundColor: string = 'purple'
        const fontWeight: string = 'bold';
        const style : string = 'color: ' + color + '; background: ' + backgroundColor + ';' +  '; font-weight: ' + fontWeight + ';'
        console.log('%c ' +  message , style)
    }
    
    public static pink(message: any) : void {
        const color: string  = 'black'
        const backgroundColor: string = 'pink'
        const fontWeight: string = 'bold';
        const style : string = 'color: ' + color + '; background: ' + backgroundColor + ';' +  '; font-weight: ' + fontWeight + ';'
        console.log('%c ' +  message , style)
    }
}

