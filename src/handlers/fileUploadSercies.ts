// services/fileUploadService.ts
import axios from "axios";

/**
 * Service for handling file uploads with features like single/multiple file uploads and validation.
 * Implements Singleton pattern to ensure only one instance exists.
 *
 * @example
 * ```typescript
 * // Get instance of FileUploadService
 * const uploader = FileUploadService.getInstance();
 *
 * // Upload single file
 * const file = new File(['content'], 'test.jpg', { type: 'image/jpeg' });
 * const url = await uploader.uploadFile(file, 'images/');
 *
 * // Upload multiple files
 * const files = [file1, file2];
 * const urls = await uploader.uploadMultipleFiles(files, 'images/');
 *
 * // Validate file before upload
 * const isValid = uploader.validateFile(file, {
 *   maxSize: 2 * 1024 * 1024, // 2MB
 *   allowedTypes: ['image/jpeg', 'image/png']
 * });
 * ```
 */
export class FileUploadService {
  private static instance: FileUploadService;
  private baseURL: string;

  private constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_UPLOAD_URL || "/api/upload";
  }

  public static getInstance(): FileUploadService {
    if (!FileUploadService.instance) {
      FileUploadService.instance = new FileUploadService();
    }
    return FileUploadService.instance;
  }

  async uploadFile(
    file: File,
    path?: string,
    onUploadProgress?: (progressEvent: any) => void
  ): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);
    if (path) formData.append("path", path);

    try {
      const response = await axios.post(this.baseURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: onUploadProgress,
      });

      return response.data.url;
    } catch (error) {
      console.error("File upload failed", error);
      throw error;
    }
  }

  async uploadMultipleFiles(
    files: File[],
    path?: string,
    onUploadProgress?: (progressEvent: any) => void
  ): Promise<string[]> {
    const uploadPromises = files.map((file) =>
      this.uploadFile(file, path, onUploadProgress)
    );

    return Promise.all(uploadPromises);
  }

  // Validate file before upload
  validateFile(
    file: File,
    options: {
      maxSize?: number;
      allowedTypes?: string[];
    } = {}
  ): boolean {
    const {
      maxSize = 5 * 1024 * 1024,
      allowedTypes = ["image/jpeg", "image/png"],
    } = options;

    // Check file size
    if (file.size > maxSize) {
      console.error("File too large");
      return false;
    }

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      console.error("Invalid file type");
      return false;
    }

    return true;
  }
}

// // Usage example
// const fileUploadService = FileUploadService.getInstance();

// async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
//   const file = event.target.files?.[0];
//   if (file && fileUploadService.validateFile(file)) {
//     try {
//       const uploadedFileUrl = await fileUploadService.uploadFile(file, 'products',
//         (progressEvent) => {
//           const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//           console.log(percentCompleted);
//         }
//       );
//       console.log('Uploaded file URL:', uploadedFileUrl);
//     } catch (error) {
//       console.error('Upload failed', error);
//     }
//   }
// }
