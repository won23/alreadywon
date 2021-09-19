interface Window {
  gtag: any;
}

interface ITimestamp {
  _seconds: number;
  _nanoseconds: number;
}
interface IBook {
  authors: string[];
  createdAt: ITimestamp;
  preview: string;
  quotes: string[];
  title: string;
  updatedAt: ITimestamp;
  uploadedBy: string;
  id?: string;
}
