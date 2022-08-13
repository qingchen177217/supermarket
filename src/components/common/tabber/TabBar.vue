<template>
    <div id="tab">
         <slot>
            
         </slot>
    </div>
</template>

<script>
export default {
   name:'TabBar'
}
</script>

<style>
#tab{
  display:flex;
  font-size:16px;
  background-color: #f5f5f5;
  height:49px;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  box-shadow:0 -1px 1px rgba(100,100,100,0.1);
}

</style>