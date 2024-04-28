using System.Text;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Utilities.Encoders;
namespace TimServe.Core;

/// <summary>
/// GM工具类
/// </summary>
public class GMUtil
{
    public const string SM4_key = "0123456789abcdeffedcba9876543210";
    public const string SM4_iv = "595298c7c6fd271f0402f804c33d3f66";

    /// <summary>
    /// SM2加密
    /// </summary>
    /// <param name="publicKeyHex"></param>
    /// <param name="data_string"></param>
    /// <returns></returns>
    public static string SM2Encrypt(string publicKeyHex, string data_string)
    {
        // 如果是130位公钥，.NET使用的话，把开头的04截取掉
        if (publicKeyHex.Length == 130)
        {
            publicKeyHex = publicKeyHex.Substring(2, 128);
        }
        // 公钥X，前64位
        string x = publicKeyHex.Substring(0, 64);
        // 公钥Y，后64位
        string y = publicKeyHex.Substring(64);
        // 获取公钥对象
        AsymmetricKeyParameter publicKey1 = GM.GetPublickeyFromXY(new BigInteger(x, 16), new BigInteger(y, 16));
        // Sm2Encrypt: C1C3C2
        // Sm2EncryptOld: C1C2C3
        byte[] digestByte = GM.Sm2Encrypt(Encoding.UTF8.GetBytes(data_string), publicKey1);
        string strSM2 = Hex.ToHexString(digestByte);
        return strSM2;
    }

    /// <summary>
    /// SM2解密
    /// </summary>
    /// <param name="privateKey_string"></param>
    /// <param name="encryptedData_string"></param>
    /// <returns></returns>
    public static string SM2Decrypt(string privateKey_string, string encryptedData_string)
    {
        if (!encryptedData_string.StartsWith("04"))
            encryptedData_string = "04" + encryptedData_string;
        BigInteger d = new(privateKey_string, 16);
        // 先拿到私钥对象，用ECPrivateKeyParameters 或 AsymmetricKeyParameter 都可以
        // ECPrivateKeyParameters bcecPrivateKey = GmUtil.GetPrivatekeyFromD(d);
        AsymmetricKeyParameter bcecPrivateKey = GM.GetPrivatekeyFromD(d);
        byte[] byToDecrypt = Hex.Decode(encryptedData_string);
        byte[] byDecrypted = GM.Sm2Decrypt(byToDecrypt, bcecPrivateKey);
        string strDecrypted = Encoding.UTF8.GetString(byDecrypted);
        return strDecrypted;
    }

    /// <summary>
    /// SM4加密（ECB）
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string SM4EncryptECB(string plainText)
    {
        byte[] key = Hex.Decode(SM4_key);
        byte[] bs = GM.Sm4EncryptECB(key, Hex.Decode(plainText), GM.SM4_ECB_NOPADDING);
        return Hex.ToHexString(bs);
    }

    /// <summary>
    /// SM4解密（ECB）
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string SM4DecryptECB(string cipherText)
    {
        byte[] key = Hex.Decode(SM4_key);
        byte[] bs = GM.Sm4DecryptECB(key, Hex.Decode(cipherText), GM.SM4_ECB_NOPADDING);
        return Encoding.UTF8.GetString(bs);
    }

    /// <summary>
    /// SM4加密（CBC）
    /// </summary>
    /// <param name="plainText"></param>
    /// <returns></returns>
    public static string SM4EncryptCBC(string plainText)
    {
        byte[] key = Hex.Decode(SM4_key);
        byte[] iv = Hex.Decode(SM4_iv);
        byte[] bs = GM.Sm4EncryptCBC(key, Hex.Decode(plainText), iv, GM.SM4_CBC_NOPADDING);
        return Hex.ToHexString(bs);
    }

    /// <summary>
    /// SM4解密（CBC）
    /// </summary>
    /// <param name="cipherText"></param>
    /// <returns></returns>
    public static string SM4DecryptCBC(string cipherText)
    {
        byte[] key = Hex.Decode(SM4_key);
        byte[] iv = Hex.Decode(SM4_iv);
        byte[] bs = GM.Sm4DecryptCBC(key, Hex.Decode(cipherText), iv, GM.SM4_CBC_NOPADDING);
        return Encoding.UTF8.GetString(bs);
    }
}