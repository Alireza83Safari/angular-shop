export interface CreateAppPic {
  appPicType: number;
  description: string;
  priority: number;
  title: string;
  url: string;
}

export interface AppPic {
  createdAt: string;
  fileId: string;
  fileName: string;
  fileType: number;
  fileUrl: string;
  id: string;
  updatedAt: string;
}
