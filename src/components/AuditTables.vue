<template>
  <div>
    <h1>Email Audit Table</h1>
    <RecipientsDisplay :recipients="recipients" />
  </div>
</template>
  
<script setup lang="ts">
import RecipientsDisplay from '@/components/RecipientsDisplay.vue';
import emailsData from '@/data/emails.json';

const recipients : string[] = emailsData;
</script>
  