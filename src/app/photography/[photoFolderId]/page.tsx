interface PhotoFolderParams {
    params: { photoFolderId: string }
}

export default function PhotoFolder({ params }: PhotoFolderParams) {
    return (
        <div>This is the page for photo folder {params.photoFolderId}</div>
    )
}