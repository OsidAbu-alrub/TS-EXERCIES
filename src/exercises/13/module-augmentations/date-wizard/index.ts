// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    const padd: (arg:number) => string;
    interface DateDetails{
        hours:number;
        minutes:number;
        seconds:number;
    }
}
