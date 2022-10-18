<template>
    <div class="form">
        <span class="form-title">Dodaj komentarz</span>
        <div class="form-content">
            <span class="avatar" />
            <form>
                <label class="author-label">Autor</label>
                <input type="text" class="author-input" placeholder="Autor">
                <label class="message-label">Komentarz</label>
                <textarea type="text" rows="5" class="message-input" placeholder="Komentarz"/>
            </form>
        </div>
        <div class="form-submit">
            <a class="btn-grad">
                Dodaj
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
}
.form-title {
    font-size: 18px;
    padding: 2rem 0;
}
.form-content {
    display: flex;
    padding-top: 1rem;
}
form {
    display: flex;
    flex-direction: column;
    width: calc(100% - 62px);
}
.form-submit {
    text-align: right;
    padding: 2rem 0;
}
.avatar {
  height: 50px;
  width: 50px;
  background-color: #e8e8e8;
  border-radius: 50%;
  display: inline-block;
  margin-right: 12px;
  margin-top: 20px;
}
.btn-grad {
    background-image: linear-gradient(to right, #1669c4 0%, #1980f6  40%);
    padding: 0.75rem 1.75rem;
    text-align: center;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 2rem;
    white-space: nowrap;
    cursor: pointer;
}
.author-input {
    padding: 1rem;
    font-size: 16px;
    border-radius: 2rem;
    z-index: 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}
.author-label {
    padding-left: 5%;
    z-index: 1;
}
.author-label::-webkit-input-placeholder {
    font-family: 'Lato';
}
.message-input {
    padding: 1rem;
    font-size: 16px;
    resize: none;
    border-radius: 1rem;
    z-index: 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}
.message-input::-webkit-input-placeholder {
    font-family: 'Lato';
}
.message-label {
    padding-left: 5%;
    z-index: 1;
}
input:focus::placeholder {
  color: transparent;
}
textarea:focus::placeholder {
  color: transparent;
}
</style>