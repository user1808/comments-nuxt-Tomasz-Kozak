<template>
    <div class="form">
        <span class="form-title">Dodaj komentarz</span>
        <div class="form-content">
            <span class="avatar" />
            <form>
                <label>Autor</label>
                <input type="text" class="author-input" placeholder="Autor">
                <label>Komentarz</label>
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
}
.btn-grad {
    background-image: linear-gradient(to right, #1669c4 0%, #1980f6  40%);
    padding: 0.75rem 1rem;
    text-align: center;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 2rem;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 600;
}
.author-input {
    padding: 1rem;
    font-size: 16px;
}
.message-input {
    padding: 1rem;
    font-size: 16px;
}
</style>