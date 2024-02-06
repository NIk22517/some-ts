class Some {
  static Array<T>(arr?: T[], defaultValue?: Array<T>): Array<T> {
    if (Array.isArray(arr)) return arr;
    return defaultValue ?? [];
  }

  static String(str?: any, defaultValue?: string): string {
    if (typeof str === "number") return str.toString();
    if (typeof str === "boolean") return str.toString();
    if (typeof str === "string") return str;
    return defaultValue ?? "";
  }

  static Number(num?: any, defaultValue?: number): number {
    if (typeof num === "string" && !isNaN(Number(num))) return Number(num);
    if (typeof num === "number") return num;
    return defaultValue ?? 0;
  }

  static Boolean(bool?: any, defaultValue?: boolean): boolean {
    if (typeof bool === "boolean") return bool;
    if (typeof bool === "string") {
      const lowerCaseBool = bool.toLowerCase();
      if (lowerCaseBool === "true") return true;
      if (lowerCaseBool === "false") return false;
    }
    if (typeof bool === "number") {
      if (bool === 1) return true;
      if (bool === 0) return false;
    }
    return defaultValue ?? false;
  }

  static Object(obj?: any, defaultValue?: object): object {
    if (
      obj !== undefined &&
      obj !== null &&
      typeof obj === "object" &&
      !Array.isArray(obj)
    ) {
      return obj;
    }
    return defaultValue ?? {};
  }
}
