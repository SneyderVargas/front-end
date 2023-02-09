<template>
    <v-list>
        <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" title="John Leider"
            subtitle="john@google.com">
            <template v-slot:append>
                <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
            </template>
        </v-list-item>
    </v-list>

    <v-divider></v-divider>
    

</template>
<script>
export default {
    data: () => ({
        selectedItem: 0,
        items: [
            { text: 'My Files', icon: 'mdi-folder' },
            { text: 'Shared with me', icon: 'mdi-account-multiple' },
            { text: 'Starred', icon: 'mdi-star' },
            { text: 'Recent', icon: 'mdi-history' },
            { text: 'Offline', icon: 'mdi-check-circle' },
            { text: 'Uploads', icon: 'mdi-upload' },
            { text: 'Backups', icon: 'mdi-cloud-upload' },
        ],
    }),
}
</script>