<template>
    <v-list v-model:opened="open" :lines="false" density="compact" nav>
        <v-list-subheader>Items</v-list-subheader>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary">
            <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-subheader>Despliege</v-list-subheader>
        <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

        <v-list-group value="Users">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
            </template>

            <v-list-group value="Admin">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Admin"></v-list-item>
                </template>

                <v-list-item v-for="([title, icon], i) in admins" :key="i" :title="title" :prepend-icon="icon"
                    :value="title"></v-list-item>
            </v-list-group>

            <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Actions"></v-list-item>
                </template>

                <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                    :prepend-icon="icon"></v-list-item>
            </v-list-group>
        </v-list-group>
    </v-list>
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
        open: ['Users'],
        admins: [
            ['Management', 'mdi-account-multiple-outline'],
            ['Settings', 'mdi-cog-outline'],
        ],
        cruds: [
            ['Create', 'mdi-plus-outline'],
            ['Read', 'mdi-file-outline'],
            ['Update', 'mdi-update'],
            ['Delete', 'mdi-delete'],
        ],
    }),
}
</script>