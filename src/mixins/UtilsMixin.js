export default{
    methods: {
        formateDate(date){
            let newDate = new Date(date);
            return newDate.toLocaleDateString();
        }
    }
}