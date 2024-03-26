
namespace SuperApi.Core.Utils;
/// <summary>
/// 加解密工具
/// </summary>
public class CryptogramUtil
{
    public static string CryptoType = ConfigurationOption.config.GetSection("Cryptogram:CryptoType").Value!; // 加密类型
    public static string PublicKey =ConfigurationOption.config.GetSection("Cryptogram:PublicKey").Value!; // 公钥
    public static string PrivateKey =  ConfigurationOption.config.GetSection("Cryptogram:PrivateKey").Value!; // 私钥
    /// <summary>
    /// 加密
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string Encrypt(string plainText)
    {
        if (CryptoType == CryptogramEnum.MD5.ToString())
        {
            return Md5Encrypt(plainText);
        }
        else if (CryptoType == CryptogramEnum.SM2.ToString())
        {
            return SM2Encrypt(plainText);
        }
        else if (CryptoType == CryptogramEnum.SM4.ToString())
        {
            return SM4EncryptECB(plainText);
        }

        return plainText;
    }

    /// <summary>
    /// Md5加密
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public static string Md5Encrypt(string input)
    {
        MD5 md5 = MD5.Create();
        byte[] bytes = Encoding.Default.GetBytes(input);
        byte[] bytesMd5 = md5.ComputeHash(bytes);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < bytesMd5.Length; i++)
        {
            sb.Append(bytesMd5[i].ToString("x2")); //32位小写
        }

        return sb.ToString();
    }

    /// <summary>
    /// 解密
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string Decrypt(string cipherText)
    {
        if (CryptoType == CryptogramEnum.SM2.ToString())
        {
            return SM2Decrypt(cipherText);
        }
        else if (CryptoType == CryptogramEnum.SM4.ToString())
        {
            return SM4DecryptECB(cipherText);
        }

        return cipherText;
    }

    /// <summary>
    /// SM2加密
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string SM2Encrypt(string plainText)
    {
        return GMUtil.SM2Encrypt(PublicKey, plainText);
    }

    /// <summary>
    /// SM2解密
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string SM2Decrypt(string cipherText)
    {
        return GMUtil.SM2Decrypt(PrivateKey, cipherText);
    }

    /// <summary>
    /// SM4加密（ECB）
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string SM4EncryptECB(string plainText)
    {
        return GMUtil.SM4EncryptECB(plainText);
    }

    /// <summary>
    /// SM4解密（ECB）
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string SM4DecryptECB(string cipherText)
    {
        return GMUtil.SM4DecryptECB(cipherText);
    }

    /// <summary>
    /// SM4加密（CBC）
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string SM4EncryptCBC(string plainText)
    {
        return GMUtil.SM4EncryptCBC(plainText);
    }

    /// <summary>
    /// SM4解密（CBC）
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string SM4DecryptCBC(string cipherText)
    {
        return GMUtil.SM4DecryptCBC(cipherText);
    }
}