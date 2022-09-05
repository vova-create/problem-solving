<template>
<BotanicalGarden/>
<BotanicalGardenDescription/>
<BotanicalNews/>
<BotanicalFooter/>
</template>

<script>
import BotanicalGarden from "@/components/BotanicalGarden";
import BotanicalGardenDescription from "@/components/BotanicalGardenDescription";
import BotanicalNews from "@/components/BotanicalNews";
import BotanicalFooter from "@/components/BotanicalFooter";

export default {
  name: 'App',
  components: {
    BotanicalGardenDescription,
    BotanicalGarden,
    BotanicalNews,
    BotanicalFooter
  }
}
</script>

<style>

</style>
