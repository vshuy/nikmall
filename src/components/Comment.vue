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
              v-model="comment_edit_data"
              placeholder="Edit your comment here"
              name="exam_name"
              required
            />
            <button v-on:click="updateComment()" class="btn btn-info">
              Update
            </button>
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
          v-model="comment_data"
          class="form-control form h-100"
          placeholder="Enter your comment"
        />
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-primary" v-on:click="upLoadComment">
          <i class="far fa-paper-plane"></i>
        </button>
      </div>
      <div
        v-for="(item, index) in comments"
        :key="index"
        class="col-sm-12 mt-1 bg-light"
        style="position: relative"
      >
        <div v-if="item.name === name" style="position: absolute; right: 5px">
          <span
            class="mr-2"
            style="color: blue"
            v-on:click="openCommentEditForm(item)"
            >Edit</span
          >
          <span style="color: red" v-on:click="deleteCommnetById(item.id)"
            >Delete</span
          >
        </div>
        <div style="font-weight: 900">{{ item.name }}</div>
        <div>{{ item.contents }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { RESOURCE_COMMENT } from './../api/api';
import axios from 'axios';
export default {
  name: 'Comment',
  props: {
    product_id_pr: Number,
    comments_pr: Array,
  },
  data() {
    return {
      comments: this.comments_pr,
      comment_data: '',
      product_id: this.product_id_pr,
      user_id: this.$cookies.get('user_id'),
      name: this.$cookies.get('user_name'),
      edit_status: false,
      comment_edit_data: '',
      id_comment_edit: '',
    };
  },
  methods: {
    openCommentEditForm(item) {
      this.edit_status = true;
      this.comment_edit_data = item.contents;
      this.id_comment_edit = item.id;
    },
    closeCommentEditForm() {
      this.edit_status = false;
    },
    async upLoadComment() {
      const result = await axios.post(
        `${RESOURCE_COMMENT}`,
        {
          product_id: this.product_id,
          data_comment: this.comment_data,
        },
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      this.refreshListComment(result.data);
    },
    async updateComment() {
      const result = await axios.put(
        `${RESOURCE_COMMENT}/${this.id_comment_edit}`,
        {
          data_comment: this.comment_edit_data,
        },
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      this.comments = this.comments.map((item) => {
        if (item.id === this.id_comment_edit) {
          item.contents = this.comment_edit_data;
        }
        return item;
      });
      this.edit_status = false;
      return result.data;
    },
    async deleteCommnetById(id_comment) {
      this.comments = this.comments.filter((item) => item.id !== id_comment);
      const result = await axios.delete(`${RESOURCE_COMMENT}/${id_comment}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      return result.data;
    },
    refreshListComment(id_comment) {
      const item = {
        id: id_comment,
        user_id: this.$cookies.get('user_id'),
        product_id: this.product_id,
        contents: this.comment_data,
        name: this.$cookies.get('user_name'),
      };
      this.comments.push(item);
    },
  },
  mounted() {
    console.log('running in mounted method');
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