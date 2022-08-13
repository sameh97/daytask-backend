
export class AppUtils {

    public static getFullException(err: Error): string {
        if (!err) return ""
        return `${err.message}, ${err.stack}`;
    }

    public static hasValue(obj: any): boolean {
        if (typeof obj === "undefined" || obj === null) {
            return false;
        }
        return true;
    }
}