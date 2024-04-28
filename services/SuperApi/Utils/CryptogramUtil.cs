using System.Text;
using System.Security.Cryptography;
using SuperApi.Config;
using SuperApi.Enum;
using SuperApi.Utils.GM;
namespace SuperApi.Utils;

/// <summary>
/// 加解密工具
/// </summary>
public class CryptogramUtil
{
    private static readonly string CryptoType = ConfigProvider.Config["Cryptogram:CryptoType"]!; // 加密类型
    private static readonly string PublicKey = ConfigProvider.Config["Cryptogram:PublicKey"]!; // 公钥
    private static readonly string PrivateKey = ConfigProvider.Config["Cryptogram:PrivateKey"]!; // 私钥

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
            return Sm2Encrypt(plainText);
        }
        else if (CryptoType == CryptogramEnum.SM4.ToString())
        {
            return Sm4EncryptEcb(plainText);
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
            return Sm2Decrypt(cipherText);
        }
        else if (CryptoType == CryptogramEnum.SM4.ToString())
        {
            return Sm4DecryptEcb(cipherText);
        }

        return cipherText;
    }

    /// <summary>
    /// SM2加密
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string Sm2Encrypt(string plainText)
    {
        return GMUtil.SM2Encrypt(PublicKey, plainText);
    }

    /// <summary>
    /// SM2解密
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string Sm2Decrypt(string cipherText)
    {
        return GMUtil.SM2Decrypt(PrivateKey, cipherText);
    }

    /// <summary>
    /// SM4加密（ECB）
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string Sm4EncryptEcb(string plainText)
    {
        return GMUtil.SM4EncryptECB(plainText);
    }

    /// <summary>
    /// SM4解密（ECB）
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string Sm4DecryptEcb(string cipherText)
    {
        return GMUtil.SM4DecryptECB(cipherText);
    }

    /// <summary>
    /// SM4加密（CBC）
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string Sm4EncryptCbc(string plainText)
    {
        return GMUtil.SM4EncryptCBC(plainText);
    }

    /// <summary>
    /// SM4解密（CBC）
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string Sm4DecryptCbc(string cipherText)
    {
        return GMUtil.SM4DecryptCBC(cipherText);
    }
}