<template>
  <div class="recipients-display">
    <span v-for="(recipient, index) in displayedRecipients" :key="index" class="recipient">
      {{ recipient }}<span v-if="index !== displayedRecipients.length - 1 || hiddenRecipientsCount">, </span>
    </span>
    <span v-if="hiddenRecipientsCount" class="badge">... +{{ hiddenRecipientsCount }}</span>
  </div>
  </template>
  
<script setup lang="ts">
import { PropType, computed, ref } from 'vue';
import { MAX_RECIPIENTS, MAX_EMAIL_LENGTH } from '@/constants';

const props = defineProps({
    recipients: {
      type: Array as PropType<string[]>,
      required: true,
    }
});

const hiddenRecipientsCount = ref<number>(0);

const displayedRecipients = computed<string[]>(() => {
  const result: string[] = [];

  props.recipients.forEach((recipient: string) => {
    const email = recipient.trim();

    const remainingSpace = MAX_RECIPIENTS - result.length;
    if (email.length <= remainingSpace * MAX_EMAIL_LENGTH) {
      result.push(email);
    } else {
      hiddenRecipientsCount.value++;
    }
  });

  return result;
});
</script>

<style scoped>
/* Example CSS styles for the RecipientsDisplay component */
.recipients-display {
  display: flex;
  flex-wrap: wrap;
}

.recipient {
  margin-right: 4px;
}

.badge {
  margin-left: 4px;
}

.recipient, .badge {
  color: lightblue;
  background-color: blue;
  padding: 10px;
  border: 1px solid lightblue;
  border-radius: 8px;
}
</style>