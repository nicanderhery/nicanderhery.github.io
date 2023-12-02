<template>
  <v-container>
    <h1 class="text-h4 text-lg-h3 text-center pb-5">My certificates</h1>
    <v-row>
      <v-col v-for="certificate in certifications" :key="certificate.name" cols="3" lg="4">
        <a :href="certificate.href">
          <v-img :src="certificate.iconUrl" />
          <p class="text-caption">{{ certificate.name }}</p>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { certifications } from '@/data';
</script>
