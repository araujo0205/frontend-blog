<<template>
    <center-component/>
</template>


<script>
import Center from './components/Center.vue'
import Aside from './components/Aside.vue'

export default {
  name: 'app',
  components: {
      'center-component': Center,
      'aside-component': Aside
  },
}
</script>
