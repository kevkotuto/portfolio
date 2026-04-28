"use client";

import * as React from "react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X, FileText, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onChange: (files: File[]) => void;
  value?: File[];
  maxFiles?: number;
  maxSize?: number;
  accept?: string[];
  className?: string;
}

export function FileUpload({
  onChange,
  value = [],
  maxFiles = 1,
  maxSize = 5 * 1024 * 1024, // 5MB par défaut
  accept = ["image/*"],
  className,
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>(value);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...files, ...acceptedFiles].slice(0, maxFiles);
      setFiles(newFiles);
      onChange(newFiles);
    },
    [files, maxFiles, onChange]
  );

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange(newFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    maxSize,
    accept: accept.reduce((acc, curr) => ({ ...acc, [curr]: [] }), {}),
  });

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return <Image className="h-6 w-6 text-primary" />;
    }
    return <FileText className="h-6 w-6 text-primary" />;
  };

  const getFilePreview = (file: File) => {
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      return (
        <div className="relative w-12 h-12 mr-3 overflow-hidden rounded">
          <img
            src={url}
            alt="Aperçu"
            className="object-cover w-full h-full"
            onLoad={() => URL.revokeObjectURL(url)}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 transition-colors hover:bg-muted/25 cursor-pointer flex flex-col items-center justify-center gap-4",
          isDragActive && "border-primary bg-primary/5",
          files.length >= maxFiles && "pointer-events-none opacity-60"
        )}
      >
        <input {...getInputProps()} />
        <UploadCloud
          className={cn("h-12 w-12", isDragActive ? "text-primary" : "text-muted-foreground")}
        />
        <div className="text-center">
          {isDragActive ? (
            <p className="text-primary font-medium">Déposez le fichier ici...</p>
          ) : (
            <>
              <p className="font-medium">
                Glissez-déposez un fichier, ou{" "}
                <span className="text-primary underline decoration-dotted underline-offset-2">
                  parcourir
                </span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {accept.join(", ")} - Max {maxFiles} fichier(s), {(maxSize / 1024 / 1024).toFixed(0)}MB
              </p>
            </>
          )}
        </div>
      </div>

      {/* Liste des fichiers */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-md border p-3 bg-background"
            >
              <div className="flex items-center">
                {getFilePreview(file) || getFileIcon(file)}
                <div className="ml-2 overflow-hidden">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(0)} Ko
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                aria-label="Supprimer le fichier"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
