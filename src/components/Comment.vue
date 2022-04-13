<template>
  <div class="container">
    <div
      class="text-center"
      style="position: relative"
      v-if="edit_status === true"
    >
      <div class="form-popup bg-light" id="myForm" style="padding: 10px">
        <div>
          <div>
            <label><b>Please edit your comment</b></label>
            <input
              class="form form-control"
              type="text"
              :value="edit_comment.contents"
              @input="setValueFormEditComment"
              placeholder="Edit your comment here"
              name="exam_name"
              required
            />
            <button v-on:click="update()" class="btn btn-info">Update</button>
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="closeCommentEditForm()"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10">
        <input
          type="text"
          :value="new_comment.contents"
          @input="setValueFormNewComment"
          class="form-control form h-100"
          placeholder="Enter your comment"
        />
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-primary" v-on:click="store()">
          <i class="far fa-paper-plane"></i>
        </button>
      </div>
      <div
        v-for="(item, index) in comments"
        :key="index"
        class="col-sm-12 mt-1 bg-light"
        style="position: relative"
      >
        <div
          v-if="item.user_id === user_id"
          style="position: absolute; right: 5px"
        >
          <span
            class="mr-2"
            style="color: blue"
            v-on:click="openCommentEditForm(item)"
            >Edit</span
          >
          <span style="color: red" v-on:click="destroy(item.id)">Delete</span>
        </div>
        <div style="font-weight: 900">{{ item.name }}</div>
        <div>{{ item.contents }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'Comment',
  props: {
    product_id_pr: Number,
  },
  computed: {
    ...mapState('comment', {
      user_id: (state) => state.user_id,
      new_comment: (state) => state.new_comment,
      edit_comment: (state) => state.edit_comment,
      comments: (state) => state.comments,
      edit_status: (state) => state.edit_status,
    }),
  },
  methods: {
    ...mapMutations('comment', {
      setValueFormEditComment: 'setValueFormEditComment',
      setValueFormNewComment: 'setValueFormNewComment',
    }),
    ...mapActions('comment', {
      show: 'show',
      store: 'store',
      update: 'update',
      destroy: 'destroy',
      initStore: 'initStore',
      openCommentEditForm: 'openCommentEditForm',
      closeCommentEditForm: 'closeCommentEditForm',
    }),
  },
  mounted() {
    this.initStore(this.product_id_pr);
  },
};
</script>
<style scoped>
#myForm {
  display: block;
  position: absolute;
  top: -12px;
  left: 500px;
  z-index: 2000;
}
</style>