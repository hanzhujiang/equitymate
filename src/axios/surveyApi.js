import request from './request.js'


//https://staging.arcnet.com.au/arc-client-end/survey/getVerifynumber?surveyid=1
export function getVerifyNum(data){
  return request({
    url: 'survey/getVerifynumber',
    method: 'post',
    params: data
  });
}
// send按钮  verify/sendVerifyCode?surveyid=1&mobilenumber=123
export function sendVerifyNum(data){
  return request({
    url: 'verify/sendVerifyCode',
    method: 'post',
    params: data
  });
}

// verify按钮  verify/verifyCodeLogin?surveyid=1&verifynumber=%2B61460638160&verifycode=7426
export function sendVerifyCode(data){
  return request({
    url: 'verify/verifyCodeLogin',
    method: 'post',
    params: data
  });
}

// survey/uploadSurveyDocumentFile?file=file&surveyid=1
export function uploadSurveyDocumentFile(data){
  return request({
    url: 'survey/uploadSurveyDocumentFile',
    method: 'post',
    params: data
  });
}


//选择 接口survey/update?clientnum=1&updatedtimestamp={当前时间}&surveyid=1
export function updateClientNum(data){
  return request({
    url: 'survey/update',
    method: 'post',
    params: data
  });
}


//页面信息显示接口surveyClient/getData?surveyid=1
export function getClientSurveyData(data){
  return request({
    url: 'surveyClient/getData',
    method: 'post',
    params: data
  });
}

//Next按钮  survey/updateAskedpagenum?status=2&askedpagenum=1&updatedtimestamp={当前时间}
export function updateAskedpagenum(data){
  return request({
    url: 'survey/updateAskedpagenum',
    method: 'post',
    params: data
  });
}

//Next按钮 插入表surveyClient/insert
export function insertClientSurvey(data){
  return request({
    url: 'surveyClient/insert',
    method: 'post',
    params: data
  });
}


// 接口surveyClient/update
export function updateSurveyClient(data){
  return request({
    url: 'surveyClient/update',
    method: 'post',
    params: data
  });
}


// 接口survey/getSurveyDependent?surveyid=1

//页面孩子的信息显示接口surveyClient/getData?surveyid=1
export function getDependencyData(data){
  return request({
    url: 'survey/getSurveyDependent',
    method: 'post',
    params: data
  });
}


//  删除小孩信息survey/deleteSurveyDependent?surveyid=1
export function deleteDependencyData(data){
  return request({
    url: 'survey/deleteSurveyDependent',
    method: 'post',
    params: data
  });
}
//  插入小孩信息survey/insertSurveyDependent 
export function insertDependencyData(data){
  return request({
    url: 'survey/insertSurveyDependent',
    method: 'post',
    params: data
  });
}


//8 get data of expenditure 
//survey/getSurvey
export function getExpendData(data){
  return request({
    url: 'survey/getSurvey',
    method: 'post',
    params: data
  });
}

//10 dget data of assets 
//survey/getSurveyAsset?surveyid=1
export function getAssetsData(data){
  return request({
    url: 'survey/getSurveyAsset',
    method: 'post',
    params: data
  });
}

//11 get data of liability 
// survey/getSurveyLiability?surveyid=1
export function getSurveyLiability(data){
  return request({
    url: 'survey/getSurveyLiability',
    method: 'post',
    params: data
  });
}


//next button
export function insertSurveyData(data){
  return request({
    url: 'survey/updateAskedpagenum',
    method: 'post',
    params: data
  });
}


//survey/getLocalStorage  languagetype
export function getCodeData(data){
  return request({
    url: 'survey/getLocalStorage',
    method: 'post',
    params: data
  });
}


//survey/getSurveyLifeInsurance?surveyid=30
export function getSurveyLifeInsurance(data){
  return request({
    url: 'survey/getSurveyLifeInsurance',
    method: 'post',
    params: data
  });
}


// survey/getSurveyDocument
export function getSurveyDocument(data){
  return request({
    url: 'survey/getSurveyDocument',
    method: 'post',
    params: data
  });
}


// survey/getSurveyOtherIncome?surveyid=1
export function getSurveyOtherIncome(data){
  return request({
    url: 'survey/getSurveyOtherIncome',
    method: 'post',
    params: data
  });
}
 
// scott    survey/getSurveyAnnuation  
export function getSurveyAnnuation(data){
  return request({
    url: 'survey/getSurveyAnnuation',
    method: 'post',
    params: data
  });
}


// survey/getPartnerLogo?surveyid=6
export function getPartnerLogo(data){
  return request({
    url: 'survey/getPartnerLogo',
    method: 'post',
    params: data
  });
}

// survey/getZipUrl?surveyid=
export function getZipUrl(data){
  return request({
    url: 'survey/getZipUrl',
    method: 'post',
    params: data
  });
}

// survey/getPartnerClient?surveyid=1640548650
export function getPartnerClient(data){
  return request({
    url: 'survey/getPartnerClient',
    method: 'post',
    params: data
  });
}


// for short survey

//3.发送验证码   sendVerifyNum  sendVerifyCode
// export function sendVerifyCode(data){
//   return request({
//     url: 'verify/sendVerifyCode',
//     method: 'get',
//     params: data
//   });
// }


//2.获取LOGO
export function getLogo(data){
  return request({
    url: 'shortSurvey/getLogo',
    method: 'get',
    params: data
  });
}

//4.短信验证码
export function verifyCodeRegistLogin(data){
  return request({
    url: 'verify/verifyCodeRegistLogin',
    method: 'get',
    params: data
  });
}

//5.生成新的短问卷
export function generateSurvey(data){
  return request({
    url: 'shortSurvey/insert',
    method: 'get',
    params: data
  });
}

//6.获取短问卷内容
export function getShortSurvey(data){
  return request({
    url: 'shortSurvey/getSurvey',
    method: 'get',
    params: data
  });
}


//7.问卷提交更新
export function updateShortSurvey(data){
  return request({
    url: 'shortSurvey/update',
    method: 'get',
    params: data
  });
}


//8.问卷提交更新
export function sendMeetNotification(data){
  return request({
    url: 'shortSurvey/sendMeetNotification',
    method: 'get',
    params: data
  });
}

