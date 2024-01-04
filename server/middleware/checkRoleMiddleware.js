const jwt=require('jsonwebtoken')
module.exports=function(role){
    return function(req, res, next){
        if(req.method==="OPTIONS"){
            next()
        }
        try{
            const token=req.headers.authorization.split(' ')[1] // Цепляем токен из headers 
            if(!token){
                return res.status(401).json({message:'Не авторизован'})
            }
            const decoded=jwt.verify(token, process.env.SECRET_KEY);
            if(decoded.role!==role){
                return res.status(403).json({message:'Нет доступа'})
            }
            req.user=decoded;//в поле user из запроса добавили данные расшифровки
            next()//вызывается следующий middleware
        } catch(e){
            res.status(401).json({message:"Не авторизован"})
        }
    }
}



