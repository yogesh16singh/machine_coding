export const root = {
    id: 1,
    name: "Root",
    isFolder: true,
    hasChild: true,
    child: [
        {
            id: 2,
            name: "public",
            isFolder: true,
            hasChild: true,
            child: [
                {
                    id: 3,
                    name: "image",
                    isFolder: false,
                    hasChild: false,
                }
            ]
        },
        {
            id: 4,
            name: "src",
            isFolder: true,
            hasChild: true,
            child: [
                {
                    id: 4,
                    name: "app",
                    isFolder: false,
                    hasChild: false,
                }
            ]
        },
    ]
}